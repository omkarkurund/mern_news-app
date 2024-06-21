
import { Color } from "@tiptap/extension-color";
import ListItem from "@tiptap/extension-list-item";
import TextStyle from "@tiptap/extension-text-style";
import StarterKit from "@tiptap/starter-kit";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { createLowlight, register } from "lowlight";
import Dropcursor from '@tiptap/extension-dropcursor'
import Image from '@tiptap/extension-image'
import css from "highlight.js/lib/languages/css";
import js from "highlight.js/lib/languages/javascript";
import ts from "highlight.js/lib/languages/typescript";
import html from "highlight.js/lib/languages/xml";

// Create a lowlight instance
const lowlight = createLowlight();
console.log(lowlight)

lowlight.listLanguages("html", html);
lowlight.listLanguages("css", css);
lowlight.listLanguages("javascript", js);
lowlight.listLanguages("typescript", ts);

export const extensions = [
  Color.configure({ types: [TextStyle.name, ListItem.name] }),
  TextStyle.configure({ types: [ListItem.name] }),
  StarterKit.configure({
    bulletList: {
      keepMarks: true,
      keepAttributes: false, // TODO: Making this as `false` because marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
    orderedList: {
      keepMarks: true,
      keepAttributes: false, // TODO: Making this as `false` because marks are not preserved when I try to preserve attrs, awaiting a bit of help
    },
  }),
  CodeBlockLowlight.configure({
    lowlight,
  }),
  Dropcursor,
  Image
];
