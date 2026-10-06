# Precision Toolkit Host

The Host loads the separate Precision Toolkit tools from one folder and gives them a shared place for organization and preferences. Each tool remains a standalone add-on and owns its own operators and settings.

## First setup

Install and enable the Host, then select the release folder under **External Tools Folder** in its add-on preferences. Confirm the folder and let loading finish. Use **Refresh Tools** after changing any package files.

## Find and run tools

The Host organizes packages into folders such as Scene, Edit, Selection, Render, Management, Utilities, Companion, and Prototype. Enable each tool in Host preferences; the eye control separately shows or hides its sidebar panel when supported. A hidden panel does not disable the tool's shortcuts or menu entries.

**Shift+W** opens the Host menu in Object Mode and Mesh Edit Mode. Its contents depend on the enabled tools and the current mode. Individual tools may also provide F3 commands, a panel, a header control, or context-menu entries; see each tool guide for its access points. Pivot has its own pie shortcut and controls.

## Change order and appearance

Arrange folders and tools in Host preferences. The Precision Header follows that order, while each interface surface keeps its own membership. The Host includes theme choices in its preferences.

## Refresh and unload

Refresh checks for added, replaced, or changed packages and retries failed loads. Disabling the Host cancels pending loading and removes resources owned by loaded tools. Avoid enabling a package both through the Host and as a standalone add-on.
