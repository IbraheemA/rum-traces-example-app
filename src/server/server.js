// import e from "express";
import axios from "axios";
import cors from 'cors';

let express;
await import('dd-trace/init.js').then( async () => {
    const expressModule = await import('express');
    express = expressModule.default;
}).then(() => {



    const port = 8080;

    // const allowedOrigins = ['http://localhost:3000', `http://localhost:${port}`];

    const corsOptions = {
        // origin: allowedOrigins
        origin: '*',
        credentials: true,
        allowedHeaders: ["Content-Type"],
    };

    const app = express();


    app.set('port', port);

    app.use(express.urlencoded({extended: true}));
    app.use(express.json());
    app.use(cors(corsOptions));
    app.options('*', cors(corsOptions));

    app.listen(port, () => {
        console.log(`Server running on port ${port}`);
    })

    app.post('/api', (req, res) => {
        console.log("POST request received");
    });

    app.post('/api/v2/rum', (req, res) => {
        console.log("RUM data received:");
        console.log(req);
        req.query["_dd"] = {
            "trace_id": 305839326,
            "span_id": 326,
        }
        axios.post("http://localhost:12722/api/v2/rum", req.query)
            .then((resp) => {
                // res.send(resp.data);
                console.log("successfully posted RUM data");
                console.log(resp);
                res.send(resp.data);
            }).catch((error) => {
                console.log("error posting RUM data");
                console.log(error);
            });
    });

    app.get('/clock', (req, res) => {
        axios.get("https://worldtimeapi.org/api/ip")
            .then((resp) => {
                // console.log("got clock:");
                // console.log(resp);
                res.send(resp.data);
            });
    });
});
