import 'dotenv/config';
import http from "http";
import cluster from "cluster";
import os from "os";
import { route, routeCluster, workers } from "./route";
import { parseArgs } from "./parse_args";

const cpus = os.cpus().length;

const PORT: number = Number(process.env.PORT) || 4000;
export let masterPort;
export const args = parseArgs();
export const app = http.createServer(!args['cluster'] ? route : routeCluster);

