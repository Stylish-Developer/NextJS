export default function handler(req,res){
    res.clearPreviewData();
    res.end('PREVIEW MODE IS DISABLED')
}