# Mesh Check

Mesh Check audits selected objects or an Outliner collection for topology, normals, overlaps, density, transforms, modifiers, and unsupported object types.

## Run an audit

1. Select the objects or collection to inspect.
2. Choose the checks to run and click **Run Check**.
3. Expand results to inspect an issue, select its affected geometry, or apply a supported fix.
4. Rescan after replacing objects or mesh data.

Repairs are undoable. Edits to shared mesh data affect every object using that data, including objects outside the current selection. Applying checked modifiers can reorder them ahead of unchecked modifiers, so review interdependent modifier stacks before using that action.

Mesh Check supports Blender 4.3 through 5.2.
