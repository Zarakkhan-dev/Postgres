const pool = require("./pool");  // Correctly import the pool

const insertUser = async (username, email, password, accesstoken, refreshtoken) => {
  const query = `
    INSERT INTO admincrediential (username, email, password, accesstoken, refreshtoken)
    VALUES ($1, $2, $3, $4, $5)
    RETURNING *;
  `;

  try {
    // Execute the query with parameterized values
    const result = await pool.query(query, [username, email, password, accesstoken, refreshtoken]);
    
    // Log the inserted row
    console.log('Inserted row:', result.rows[0]);
  } catch (err) {
    console.error('Error inserting data:', err);
  }
};

module.exports = { insertUser };
