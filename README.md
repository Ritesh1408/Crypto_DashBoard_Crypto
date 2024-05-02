**
Website Link : - **  https://cryptotracker-dashboard14.netlify.app/



### Step 1: Project Setup
- Create a new React/Next.js project.
- Set up dependencies like Axios for API calls.
- Organize project structure with separate components for table, search, and sorting.

### Step 2: Fetch Data from Coinlore API
- Use Axios to fetch data from the Coinlore API endpoint.
- Handle API errors gracefully.

### Step 3: Table Component
- Design and implement a table component based on the provided Figma design.
- Display fetched data in the table with required columns.
- Implement sorting functionality for each column.
- Highlight the sorted column and display sort order indicator.

### Step 4: Search Functionality
- Add a search input field above the table.
- Implement real-time filtering based on user input for Name and ID fields.

### Step 5: Styling and Design
- Refer to the provided Figma design for table styling.
- Utilize CSS or a CSS framework to style the components.
- Ensure responsiveness across different devices and screen sizes.

### README File
README.md file detailing project setup, usage instructions, and any other relevant information.

Now, let's dive into each step and start implementing the web application.

1. **Project Setup:**
   - Create a new React/Next.js project.
   - Install necessary dependencies like Axios for API calls.
   - Organize project structure with components folder, styles folder, etc.

2. **Fetch Data from Coinlore API:**
   - Use Axios to make a GET request to the Coinlore API endpoint.
   - Handle errors using try-catch or Axios error handling mechanism.

3. **Table Component:**
   - Design the table component based on the provided Figma design.
   - Create a React component for the table.
   - Display fetched data in the table with required columns (ID, Name, Rank, Price (USD), Percent Change (24h), Price (BTC), Market Cap (USD)).
   - Implement sorting functionality for each column using state management (useState).
   - Highlight the sorted column and display sort order indicator (asc/desc).

4. **Search Functionality:**
   - Add a search input field above the table.
   - Implement onChange event handler to filter data based on user input for Name and ID fields.
   - Update the table in real-time as the user types in the search query.

5. **Styling and Design:**
   - Refer to the provided Figma design for table styling.
   - Utilize CSS or a CSS framework like Bootstrap or Tailwind CSS to style the components.
   - Ensure responsiveness across different devices and screen sizes.

