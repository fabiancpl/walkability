# walkability

Steps to upload a layer to Mapbox Studio

1. Create datasource: tilesets upload-source {USERNAME} {DATASOURCE_ID} {FILEPATH} --token {TOKEN}

2. Create recipe.json file: touch recipe.json

3. Create empty tileset: tilesets create {USERNAME}.{DATASOURCE_ID} --recipe ./recipe.json --name "{TILESET_NAME}" --token {TOKEN}

4. Publish: tilesets publish {USERNAME}.{DATASOURCE_ID} --token {TOKEN}

5. Verify job status: tilesets status {USERNAME}.{DATASOURCE_ID} --token {TOKEN}