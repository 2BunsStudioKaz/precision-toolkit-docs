# Surface Fair

Surface Fair reconstructs a selected surface patch from the surrounding curvature.

## Workflow

1. Save a comparison copy of the mesh.
2. In Mesh Edit Mode, select a surface island whose surrounding geometry provides a usable surface.
3. Run Surface Fair and adjust **Influence**, **Bulge**, **Preserve Flow**, and **Iterations**.
4. Compare the result with the original and undo if needed.

Bulge offsets the repaired patch along or against its face normals. The offset fades toward the fixed boundary. Preserve Flow and Iterations control additional topology redistribution.

Surface Fair can change clean but wavy surfaces. A usable surrounding region is required; unsupported or overlapping fits are cancelled. It does not guarantee preserved volume or freedom from self-intersections.

**Compatibility:** Windows only, Blender 5.1 through 5.2.
