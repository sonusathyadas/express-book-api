## Deploy via YAML

```powershell
$RESOURCE_GROUP="TestGrp"
$LOCATION="southeastasia"
$ENVIRONMENT="ai200training-app-env"
$APP_NAME="book-api"
```

### Create a container app with sytem identity and default app
```bash
az containerapp create `
     --name $APP_NAME `
     --resource-group $RESOURCE_GROUP `
     --yaml "yaml\default-app.yml"
```

### Get the resource Id of the container registry
```bash
az acr show --name ai200training --query id -o tsv
```

### Grab the identity principalId
```bash
az containerapp show --name $APP_NAME --resource-group $RESOURCE_GROUP --query identity.principalId -o tsv
```

### Assign the RBAC to system identity
```bash
az role assignment create --assignee <principalId> --role AcrPull --scope <acr-resource-id>
```

### Update the app to use the ACR container images using system assigned identity 
```bash
az containerapp update `
     --name $APP_NAME `
     --resource-group $RESOURCE_GROUP `
     --yaml "yaml\book-api.yml"
```