// Configurações da aplicação
const config = {
    googleClientId: '436283052176-192uojpfj5mahuo28q4k9jpafijk0tv1.apps.googleusercontent.com'
};

// Validação do Client ID
if (
    config.googleClientId ===
        '436283052176-192uojpfj5mahuo28q4k9jpafijk0tv1.apps.googleusercontent.com' ||
    !config.googleClientId
) {
    console.error('ERRO: Google Client ID não configurado. Verifique se:');
    console.error('1. O arquivo .env existe e contém GOOGLE_CLIENT_ID');
    console.error('2. O script build:config foi executado');
    console.error('3. O valor do GOOGLE_CLIENT_ID está correto no Google Cloud Console');
}

export default config;
