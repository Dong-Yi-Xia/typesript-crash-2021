### Install typescript
```
npm i -g typescript
```

### To check the version
```
tsc -v
```

### To compile all TS to JS.
```
tsc
```

### To compile a single TS to JS
```
tsc <filename>
```

### To watch the complier
```
tsc --watch <filename>
```
Having the watch running any change to TS file will be automatically updated / complited to the JS file

### Create a tsc config file
```
tsc --init
```
Can out which version of ES JS output \
Allow to change rootDir and outDir

### Create Reactjs using typescript
```
npx create-react-app <filename> --template typescript
```
