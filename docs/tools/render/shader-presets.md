# Shader Presets

Shader Presets adds reusable shader node groups to the Shader Editor. It requires Blender 5.2 or later.

## Add a utility group

In the Shader Editor, press **Shift+A > Precision Tool Kit** and choose **Stochastic Mapping** or **Raycast Depth**. Place the node group and click to confirm, or press Esc to cancel. Repeated additions reuse the scene's local group; use Blender's single-user controls when you need a separate editable copy.

## Add Parallax Occlusion Mapping

1. In a material's Shader Editor, choose **Shift+A > Precision Tool Kit > POM**.
2. Set the Height Map image in the visible image selector. Use a Non-Color image for height data.
3. Connect **Parallax UV** to the Vector inputs of the material's texture maps.
4. Connect the color, roughness, metallic, and normal outputs to the material as needed.
5. Adjust Samples, Depth, and Mid Level to tune the effect.

The height map is not bundled. User image textures remain external and must be supplied when moving a project. Saved node graphs continue to render without the add-on, but changing the POM image selector requires Shader Presets to be enabled.
