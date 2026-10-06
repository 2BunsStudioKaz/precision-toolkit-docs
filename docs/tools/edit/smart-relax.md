# Smart Relax

Smart Relax smooths selected mesh topology while protecting boundaries, sharp features, and the original shape.

## Workflow

1. Enter Mesh Edit Mode and select the vertices to relax.
2. Run **Smart Relax** from the tool panel or F3.
3. Adjust the controls in Blender's **Adjust Last Operation** panel.

## Controls

- **Strength** and **Iterations** set the amount and number of smoothing passes.
- **Surface Awareness** reprojects the result toward the surrounding surface and can preserve volume.
- **Edge Sliding** controls sliding and protection for sharp edges, UV seams, boundaries, and corners.

Smart Relax operates on selected vertices in Mesh Edit Mode. It supports Blender 4.3 through 5.2.
