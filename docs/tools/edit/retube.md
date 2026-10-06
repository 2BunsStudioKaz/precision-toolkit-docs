# ReTube

ReTube builds and reshapes circular or tubular mesh topology. It groups **Reskin**, **Unskin**, **ReRing**, **ReLoop**, and **Fillet** in one tool.

## Choose an operation

Open ReTube in the Edit Mode panel or the Host's Edit menu, then choose the operation that matches your selection. **Reskin** builds tubular surface topology from a selected path. **Unskin** extracts a centerline from a tube. **ReRing** works with the cross-section rings of a tube; **ReLoop** adjusts loop distribution along the tube. **Fillet** is the final option in the ReTube submenu.

Select clean, regular topology for Unskin and ReRing. Closed tube grids are supported; punctured, branching, or inconsistent grids can be rejected. ReLoop settings are retained across mesh Undo/Redo.

The standalone mesh context menu starts ReLoop in Uniform mode. The ReTube panel retains its selected mode. ReTube supports Blender 4.3 through 5.2.
