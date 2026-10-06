# ReCurve

ReCurve reshapes selected edge paths, surface patches, and tube regions with editable curve guides.

## Workflow

1. In Mesh Edit Mode, select edge paths or face regions on one mesh.
2. Run ReCurve and move the temporary guide points in the viewport.
3. Adjust guide shape, deformation, proportional editing, or mask controls.
4. Use **Ctrl+Z** and **Ctrl+Shift+Z** to undo and redo changes while the session remains active.
5. Press **Enter** or **Esc** while idle to apply the session. Blender Undo restores the mesh from before the session.

## Controls

The Guide section contains Influence, control points, and the curve editor. Deformation includes Local Orientation, Preserve, Even, Adapt, and Snap. Proportional Editing controls the radius and falloff around guide points. Boundary and Sharp Edge masks can limit the effect.

The curve editor supports built-in shapes such as Smooth, Linear, Sharp, and Constant, plus saved custom presets. Click to add points, select and move them, or use the displayed graph shortcuts. The graph is shared by guide, proportional falloff, and mask falloff, while each keeps its own curve.

ReCurve supports Blender 4.3 through 5.2. It operates on one edited mesh per invocation.
