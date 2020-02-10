"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var MatchReader_1 = require("./MatchReader");
var Summary_1 = require("./Summary");
var reader = MatchReader_1.MatchReader.fromCsv('football.csv');
reader.load();
Summary_1.Summary.winsAnalysisWithHtmlReport('Man United').buildAndPrintReport(reader.matches);
