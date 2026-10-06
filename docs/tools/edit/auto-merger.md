# Auto-Merger

Auto-Merger prevents Blender's Auto Merge from welding vertices across separate connected mesh islands.

## Use island-safe Auto Merge

In Mesh Edit Mode, enable **Island-Safe Auto Merge**, then use Blender's normal transforms, gizmos, extrusions, or slides. Merging occurs when the native operation is confirmed. Cancelled operations follow Blender's own behavior. The default threshold is 0.0005.

## Merge selected vertices manually

Open **Mesh > Merge > By Distance (Keep Islands)**. This command only compares selected vertices within each current connected island and is available even when automatic protection is off. Adjust the distance in **Adjust Last Operation**.

## Notes

The tool does not merge across disconnected islands. Blender's native merge distance still applies within an island. Auto-Merger supports Blender 4.3 through 5.2 and runs standalone or through the Host, but not both at once.
