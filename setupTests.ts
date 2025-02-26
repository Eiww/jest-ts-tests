import { RequestInit, Response } from "node-fetch";

global.fetch = require("node-fetch") as unknown as typeof fetch;
