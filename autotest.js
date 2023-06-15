// autotest for method:

curl --location 'https://www.pokemonbattle.me:9104/pokemons' \
--header 'trainer_token: 3e1901333ef00752fd23fdfab11b599d' \
--header 'Content-Type: application/json' \
--data '{
    "name": "",
    "photo": "https://dolnikov.ru/pokemons/albums/019.png"
}'

Tests:

pm.test("Body matches string", function () {
    pm.expect(pm.response.text()).to.include("Отсутствует имя покемона(name)");
});
pm.test("Your test name", function () {
    var jsonData = pm.response.json();
    pm.expect(jsonData.message).to.eql("Отсутствует имя покемона(name)");
});
pm.test("Status code is 400", function () {
    pm.response.to.have.status(400);
});
