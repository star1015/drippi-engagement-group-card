# Drippi Test Project

### **The task**

One of the elements required to create this feature is a list of the available engagement groups. Your task is to create a card component that can display the information about each group.

The card should display the following information:

- The name of the group
- The requirements to enter the group  (examples: minimum followers, minimum account age, $US followers, ect…)
- The current group member count
- The price per month to join the group
- Groups can be drippi owned or community owned by a specific user. there should be a badge on the card that shows who owns the group
- Groups can either be public or private
    - If the group is public it should have button that say join
    - if the group is private it should have a button that says apply
        - when apply is clicked it should open a modal with a textfield where the user can answer the question “why should we accept you to the group”

### **Required tech stack:**
- react
- typescript
- tailwind css
- Radix UI components

-------------------------------------------------------------

### Achievement 
Focused on Code optimization, reusability, and scalability.
- Project Structure
    `assets`, `components`, `layouts`, `mocks`, `models`, `pages`, `styles`
- Created `Engagement Groups - Page Container` and `Engagement Groups - Card Component` with the components such as  `Card`, `Dialog`, and other modules in `Radix UI`.
- Designed the Interfaces such as `group` and `formData` to handle the Card.
- Used `Tailwind.css` and `Radix UI Colors` to design the UI.
- Additionally By `WAI-ARIA` such as `aria-label` and `tab-index`, updated the components more accessible and user-friendly for people with disabilities. 


### Instruction
`node v18.17.1 & npm v9.6.7`
1. Install the relevant version of node and nvm.
- https://github.com/nvm-sh/nvm (for Linux and macOS) and https://github.com/coreybutler/nvm-windows (for Windows).
- `nvm install 18.17.1`
- `nvm use 18.17.1`

2. Run the project.
- `npm install`
- `npm run dev`
- It will run on the port: `http://localhost:5173/`

### HighLight
![image](https://github.com/star1015/drippi-engagement-group-card/assets/45536419/529b9ac5-6d4a-4e86-9a8b-446be4cc0fbe)
![image](https://github.com/star1015/drippi-engagement-group-card/assets/45536419/c09e4b7f-5f10-4b64-9327-ef1d8aa66c29)

