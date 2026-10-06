# Align Tools

Align Tools groups four mesh operations for Mesh Edit Mode: **Bridge**, **Even Spacing**, **Planar**, and **Intersect**.

## Basic workflow

Select supported mesh loops, chains, faces, or edges. Run the operation from the Align Tools panel, F3, or the tool menu, then tune its controls in the panel or Blender's **Adjust Last Operation** panel.

- **Bridge** connects selected loop pairs or face patches. Set sections, offset, twist, sag, and profile to shape the connection.
- **Even Spacing** redistributes selected chains along their existing path.
- **Planar** projects faces or edges onto a plane. Choose orientation and anchor; **Individual** treats connected islands separately.
- **Intersect** resolves supported edge or face intersections.

## Notes

Bridge pairing is based on geometry and is not a collision check. Branching or shared boundaries may be rejected. Planar can use Best Fit when an edge selection has no usable surface normal. A straight loose edge is already planar; use an axis to flatten it in a chosen direction.

Align Tools supports Blender 4.3 through 5.2. It can run standalone or through the Host. Do not enable both copies at once.
