import db from '../services/db.js';
console.log("DB", db)

export const getTestApi = (req,res) => {
    console.log("Called")
    res.status(200).json({"name" : "Mustafa Adenwala", "age" : "27"})
}

export const getTestCall = async (req, res) => {
    // const rows = await db();
    const rows = await db(
        `SELECT id, name, released_year, githut_rank, pypl_rank, tiobe_rank 
    FROM programming_languages where name = ?`,
    ['JavaScript'] 
    )
    res.status(200).json(rows)
}

export const postProgrammingLanguage = async (req, res) => {
    const body = req.body;
    let message = '';
        const result = await db(
            `INSERT INTO programming_languages (name, released_year, github_rank, pypl_rank, tiobe_rank)
            VALUES (?, ?, ?, ?, ?)`, 
            [body.name, body.released_year, body.github_rank, body.pypl_rank, body.tiobe_rank]
        );
        message = "Programming language created successfully";
    res.status(200).send(message);
    
}

export const updateProgrammingLangauge = async(req, res) => {
    const id = req.params.id;
    const body = req.body;
    let message = ''
    const payload = await db(
        `UPDATE programming_languages
        set name = ?, released_year = ?, github_rank = ?, pypl_rank = ?, tiobe_rank = ? 
        where id = ${id}`, 
        [body.name, body.released_year, body.github_rank, body.pypl_rank, body.tiobe_rank]
    ); 
    console.log("payload", payload);
    res.status(200).json(payload);
}

export const deleteProgrammingLanguage = async (req,res) => {
    const id = req.params.id;
    const payload =await db(
        `DELETE from programming_languages where id = ?`, [id]
    )
    console.log("payload", payload);
    res.status(200).json(payload);
}