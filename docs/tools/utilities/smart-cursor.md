# Smart Cursor

Smart Cursor places the 3D Cursor on nearby mesh topology and aligns its orientation to the surface.

## Place the cursor

Use Blender's configured 3D Cursor gesture. Smart Cursor follows the key and modifier settings in Blender's preferences, including changes made while the add-on is enabled. The default snap threshold is 20 pixels.

In Object Mode, selected objects receive priority. In Edit Mode, visible topology on the edited meshes can be used, including loose edges. Vertices and exact centers take priority over arbitrary edge points near the cursor.

## Choose orientation

- **Fixed** uses a face normal and feature tangent.
- **Alternate** follows the other polygon lane while keeping the same face normal.
- **Tangent** blends adjacent face normals at an edge or vertex.

Axis Order is applied after the orientation is chosen. Loose edges and isolated vertices use fallback directions because they have no supporting surface.

Smart Cursor supports Blender 4.3 through 5.2.
