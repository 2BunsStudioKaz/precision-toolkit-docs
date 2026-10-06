# Cleanup

Cleanup helps reduce file clutter with review-first duplicate merging and removal of broken or unused data.

## Optimize a file

1. Choose the data categories to inspect.
2. Run **Optimize File** from the panel, header, or F3.
3. Review the proposed changes and detailed report.
4. Confirm the enabled changes or cancel.

Only checked categories are scanned. Cleanup compares actual data and relationships as well as names; items it cannot verify are kept separate. Confirmed changes support Blender Undo.

## Prevent Duplicates

The optional Prevent Duplicates feature compares newly pasted or appended data with the file state before that import. It does not continuously clean the whole project. Each completed batch has its own Undo step.

Use the removal and orphan-purge review actions carefully. Purge can remove all unused local and linked data at confirmation, including data made unused after the scan.

Cleanup supports Blender 4.3 through 5.2.
