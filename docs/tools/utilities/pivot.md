# Pivot

Pivot moves object origins and controls the point and orientation used by Blender transforms.

## Pivot pie

In Object Mode, hold the Pivot shortcut, move toward an action, then release. The default shortcut is **P**. Tap it for click selection. The pie provides Transform Origin, To Base, To Active, To Center, To Cursor, To Surface, To Boundary, and Geometry To Pivot. Change the shortcut in Pivot's Shortcuts preferences.

## Place geometry or origins

Use To Active, To Center, To Cursor, To Surface, or To Boundary to place origins relative to the selected target. These operations are one-shot: the placed result does not continue following the cursor. **Geometry To Pivot** moves geometry using Blender's Geometry to Origin behavior.

**To Base** moves each selected mesh origin to a face center at its local bounding-box end. Choose X/Y/Z and Invert before applying.

## Transform Origin

Enable Transform Origin and press **G** in the viewport. Drag the origin or snap it to the displayed cage and cursor points. Hold **Shift** during the drag to temporarily match orientation. Pivot supports Blender 4.3 through 5.2.
