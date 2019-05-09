const app = new Vue({
    el: '#app',
    data: {
        titulo: "Hola Mundo",
        frutas: ['1,2,3,4,5'],
        frutas2: [
            {nombre:'0',cantidad:0},
            {nombre:'1',cantidad:11},
            {nombre:'2',cantidad:22},
            {nombre:'3',cantidad:33},
            {nombre:'4',cantidad:4},
            {nombre:'5',cantidad:5}
        ],
        nuevaFruta: '',
        total: 0
    },
    methods: {
        agregarFruta() {
            if(this.nuevaFruta) {
                this.frutas.push(this.nuevaFruta);
                this.frutas2.push({
                    nombre: this.nuevaFruta,
                    cantidad: 0
                });
                this.nuevaFruta = '';
            }
        },
        eliminaFruta() {
            this.frutas.pop();
            this.frutas2.pop();
        }
    },
    computed: {
        sumarFrutas() {
            this.total = 0;
            for(fruta of this.frutas2) {
                this.total += fruta.cantidad;
            }
            return this.total;
        }
    }
});