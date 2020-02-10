import {MatchReader} from './MatchReader';
import {Summary} from './Summary';
const reader = MatchReader.fromCsv('football.csv');
reader.load();
Summary.winsAnalysisWithHtmlReport('Man United').buildAndPrintReport(reader.matches);


