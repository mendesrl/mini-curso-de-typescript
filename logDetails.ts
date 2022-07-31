type Uid = number | string | undefined

function logDetails(uid: Uid, item: string) {
    console.log(`O produto ${uid} tem o subproduto ${item}.`);
}

function logInfo(uid: Uid, message: string) {
    console.log(`O produto ${uid} tem o subproduto ${message}.`);
}

type Platform = 'Windows' | 'Linux' | 'Mac Os' 

function renderPlatform(platform: Platform) {
    return platform
}

logDetails(1,"sapato");
logDetails("23","sapato");

logInfo(1,"Erro de permissão");
logInfo("23","Usuario bloqueado");