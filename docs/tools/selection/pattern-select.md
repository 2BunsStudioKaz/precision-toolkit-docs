# Pattern Select

Pattern Select creates repeating mesh selections and selects connected islands by size.

## Pattern Select

In Mesh Edit Mode, make a seed selection, choose the pattern and orientation, and run **Pattern Select**. Complete quad regions can be selected as loops or rings. Vertex and edge selections can define open chains or closed loops. Checker, Total, Offset, and Expand adjust the repeated selection.

Branching chains and isolated vertices are not supported by the strip workflow. Face-grid selection uses quads; triangles and n-gons are excluded from that solver.

## Select by Dimensions

Set a minimum and maximum size, then scan the connected mesh islands in the active edit mesh. The tool compares each island's world-space bounding-box diagonal and selects islands in the requested range.

## Select Similar

Select a connected vertex, edge, or face patch, then run Select Similar to add patches with matching internal connectivity and shape. **Threshold** controls tolerance; **Normalize** allows uniformly scaled copies to match.

Each feature has its own enable control. Pattern Select supports Blender 4.3 through 5.2.
