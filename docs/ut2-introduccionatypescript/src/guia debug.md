Ejecutar tsc --init para que se cree el archivo tsconfig.json

Algo parecido a esto 
{
    "compilerOptions": {
      "target": "es2016",
      "module": "commonjs",
      "strict": true,
      "esModuleInterop": true,
      "forceConsistentCasingInFileNames": true,
      "skipLibCheck": true,
      "sourceMap": true
    }
  }
Importante la propiedad sourcemap a true

Crear archivo lauch.json dentro de .vscode con por ejemplo esto

{
    "version": "0.2.0",
    "configurations": [
        {
            "type": "node",
            "request": "launch",
            "name": "Launch Program",
            "program": "${workspaceFolder}/extra-ejercicios-basicos-sol.ts",
            "preLaunchTask": "tsc: build - tsconfig.json",
            "outFiles": [
                "${workspaceFolder}/**/*.js"
            ]
        }
    ]
}