INSERT INTO pokemonusers
(
    email, hash, pokemon, team
)
VALUES
(
    $1, $2, $3, $4
)
RETURNING *;