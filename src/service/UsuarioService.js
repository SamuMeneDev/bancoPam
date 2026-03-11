import AsyncStorage from "@react-native-async-storage/async-storage";

class UsuarioService {

    static async listUsers() {
        const data = await AsyncStorage.getItem('@cadastro');
        if(data != null) {
            return JSON.parse(data);
        } else {
            return null;
        }
    }

    static async saveUsuario(usuario) {
        const listaUsuarios = await UsuarioService.listUsers();
        listaUsuarios.push(usuario);

        
        await AsyncStorage.setItem('@cadastro', JSON.stringify(listaUsuarios));
    }

    static async saveCurrentUsuario(usuario) {
        await AsyncStorage.setItem("@login", JSON.stringify(usuario));
    }

    static async getLogged() {
        const data = await AsyncStorage.getItem('@login');
        return JSON.parse(data);
    }
    static async saveDespesa(registro) {
        const usuario = await UsuarioService.getLogged();
        usuario.historico.push(registro);
        
        let novoSaldo= 0;
        usuario.historico.forEach(reg=>{novoSaldo+=reg.valor});
        usuario.saldo = novoSaldo;


        await UsuarioService.alterUsersList(usuario);
        await UsuarioService.saveCurrentUsuario(usuario);
    }
    static async alterUsersList(usuario) {
        const listaUsuarios = await UsuarioService.listUsers();
        const novaListaUsuarios = listaUsuarios.map(us=>us.email == usuario.email?usuario:us);

        await AsyncStorage.setItem('@cadastro', JSON.stringify(novaListaUsuarios));
    }

    static async getUsuario(email) {
        const data = await UsuarioService.listUsers();
        let objAlvo = null;
        if(data != null) {
            data.forEach(element => {
                if(element.email == email) {
                    objAlvo = element;
                }
            });
        } else {
            return null;
        }
    }
    static async init() {
        const data = await this.listUsers();
        if(data == null) {
            await AsyncStorage.setItem('@cadastro', '[]');
        }
    }
}

export default UsuarioService;