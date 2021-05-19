const axios = require('axios');

const TotalTransaction = 360000
const MiniSecond = 10
const DestinationAddress = "https://mainnet.infura.io/v3/undefined"

let params = [{
    "from": "0x627306090abaB3A6e1400e9345bC60c78a8BEf57","0xDc803AbE63e383B687bafAb6D74653eff0d09344"
    "to": "0xBF22C17eb6E9c42A76d5b8B05ce29B4a8842dcce",
    //"gas": "0x76c0", // 30400
    //"gasPrice": "0x9184e72a000", // 10000000000000
    //"data": "0xd46e8dd67c5d32be8d46e8dd67c5d32be8058bb8eb970870f072445675058bb8eb970870f072445675"
}]

for (let i = 0; i < TotalTransaction; i++) {
    setTimeout(() => {
        axios.post(DestinationAddress, {
            jsonrpc: "2.0",
            "method": "eth_sendTransaction",
            params: params,
            id: 1
        },
        {
            headers: {
                'Content-Type': 'application/json',
            }
        })
        .then(function (response) {
            console.log(response.data);
        })
        .catch(function (error) {
            console.log(error);
        })
    }, MiniSecond * i)
}
