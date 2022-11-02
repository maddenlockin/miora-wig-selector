![wireframe for moira wig app with html elements outlined]('./assets/Screen Shot 2022-11-01 at 2.31.21 PM.png')

HTML

**Slice 1**

    section for dropdowns
        div
            label
            select
            - option for each img with values
            img
            counter div

**Slice 2**

    duplicate above but for location

**Slice 3**

    section for phrases
        label
        input for phrases
        add button
        ul for list display

STATE

-   wig changes (counter) = slice 1
-   location changes (counter) = slice 2
-   aphorisms array = slice 3

EVENTS

Slice 1

-   Wig Select (on change)
    -   user selection used for img display
    -   increment counter
    -   update view (display state change)

Slice 2

-   Location Select (on change)
    -   same as Wig

Slice 3

-   'Add' Button (on click)
    -   push user's input into phrases display in state
    -   display all phrases
    -   (bonus) reset the input value
