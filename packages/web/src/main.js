import Vue from 'vue';
import comp from 'ui/lib/table'
import {loadFlowingLineLayer} from 'arcgis-layer'
loadFlowingLineLayer({
    graphics:[],
}).then(res=>{
    console.log(res)
})
window.xxx = new Vue({
    el:'#app',
    render: h => h(comp,{
        staticStyle: {
            width: '800px',
        },
        attrs: {
            height: 'auto',
            maxHeight: 400,
            minHeight: 120,
            tableData: [
                {key1: 'a', key2: 'b', key3: 'c', key4: 'd'},
                {key1: 'a', key2: 'b', key3: 'c', key4: 'd'},
                {key1: 'a', key2: 'b', key3: 'c', key4: 'd'},
                {key1: 'a', key2: 'b', key3: 'c', key4: 'd'},
            ],
            tableCols: [
                {key: "key1", label: 'key1', width: 200},
                {key: "key2", label: 'key2', width: 200},
                {key: "key3", label: 'key3', width: 200},
                {key: "key4", label: 'key4', width: 200},
            ]
        }
    })
});
