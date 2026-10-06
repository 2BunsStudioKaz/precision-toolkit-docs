# Fill Quad

Fill Quad creates quad-flow faces from supported mesh boundaries in Mesh Edit Mode.

## Use

1. Select one vertex or one edge on a boundary, then press **F**.
2. Review the proposed face previews in the viewport.
3. Hover a preview to see its full plane, then click the face you want to create.

For other selection types, Blender's native Fill behavior is used. Nearly edge-on previews are hidden. Supported boundaries include planar quad margins and selected surface extensions; the result depends on the neighboring topology.

The operation revalidates its plan before making changes. If it cannot safely apply the face, the operation rolls back. Fill Quad supports Blender 4.3 through 5.2.
