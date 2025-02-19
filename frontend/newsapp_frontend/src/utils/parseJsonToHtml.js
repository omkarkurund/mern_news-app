import { generateHTML } from "@tiptap/html";
// import parse from "html-react-parser";
// import { extensions } from "../constants/tiptapExtensions";
// import Bold from '@tiptap/extension-bold'
// Option 2: Browser-only (lightweight)
// import { generateHTML } from '@tiptap/core'
// import Document from '@tiptap/extension-document'
// import Paragraph from '@tiptap/extension-paragraph'
// import Text from '@tiptap/extension-text'
// import Italic from '@tiptap/extension-italic'

import parse from 'html-react-parser'
import { json } from "react-router-dom";
import { extensions } from "../constants/tiptapExtensions";



const parseJsonToHtml = (json)=>{
    return parse(generateHTML(json,extensions))
}

export default parseJsonToHtml;
