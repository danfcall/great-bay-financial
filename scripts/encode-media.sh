#!/bin/bash
# Regenerates the hero background loop's web derivatives from the 4K master.
#
#   ./scripts/encode-media.sh [path-to-master.mp4]
#
# Choices worth knowing before changing anything here:
#
#   H.264 only, no WebM/AV1 ladder. Measured on this footage, VP9 gained 1.5
#   VMAF and AV1 gained 3.0 over H.264 at an identical file size - far less
#   than the usual spread, because dense foliage compresses badly in every
#   codec. That is not enough to justify a second encode, and H.264 is the one
#   codec with hardware decode everywhere, which matters for a loop that plays
#   continuously behind the page.
#
#   24fps, down from the master's 30. A slow aerial drift loses nothing and it
#   is a straight ~20% saving.
#
#   Mild hqdn3d. Drone footage carries fine sensor grain that costs a lot of
#   bitrate and reads as nothing once the page's navy scrims are over it.
#
#   aq-mode=3 biases bitrate toward dark and flat regions. The page darkens
#   this footage hard, and banding in the sky is the failure mode that would
#   show first.
#
#   1400k desktop / 700k mobile. Chosen by compositing candidates under the
#   real scrims rather than by VMAF alone: the score is dragged down by the
#   foliage at the bottom of the frame, which the page's bottom gradient
#   renders as near-solid navy. In the band that stays visible, 1400k is
#   indistinguishable from the master.
set -euo pipefail

MASTER="${1:-media-src/great-bay-loop-master.mp4}"
OUT=public
TMP="$(mktemp -d)"
trap 'rm -rf "$TMP"' EXIT

[ -f "$MASTER" ] || { echo "Master not found: $MASTER" >&2; exit 1; }

encode () {
  local w=$1 h=$2 bitrate=$3 name=$4
  local vf="scale=${w}:${h}:flags=lanczos,hqdn3d=2:1:4:4,fps=24"
  ffmpeg -v error -y -i "$MASTER" -an -vf "$vf" -c:v libx264 -b:v "$bitrate" \
    -pass 1 -passlogfile "$TMP/$name" -preset veryslow -g 120 -f null /dev/null
  ffmpeg -v error -y -i "$MASTER" -an -vf "$vf" -c:v libx264 -b:v "$bitrate" \
    -pass 2 -passlogfile "$TMP/$name" -preset veryslow -g 120 \
    -profile:v high -level 4.0 -pix_fmt yuv420p \
    -x264-params "aq-mode=3" -movflags +faststart "$OUT/$name.mp4"
  echo "  $OUT/$name.mp4"
}

echo "Encoding video..."
encode 1920 1080 1400k great-bay-loop
encode 1280  720  700k great-bay-loop-mobile

# The poster is frame 0, so the swap to the playing video is seamless. It is
# also what reduced-motion visitors keep looking at, so it is worth real
# quality - though 1280 upscaled is indistinguishable once scrimmed.
echo "Encoding poster..."
ffmpeg -v error -y -i "$MASTER" -frames:v 1 -vf "scale=1280:-2:flags=lanczos" "$TMP/poster.png"
cwebp -quiet -q 66 -m 6 "$TMP/poster.png" -o "$OUT/great-bay-loop-poster.webp"
echo "  $OUT/great-bay-loop-poster.webp"

echo
ls -la "$OUT"/great-bay-loop*.mp4 "$OUT"/great-bay-loop-poster.webp | awk '{printf "%-46s %7.2f MB\n", $9, $5/1048576}'
