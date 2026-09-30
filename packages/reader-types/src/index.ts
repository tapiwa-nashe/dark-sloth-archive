export type ReaderBlock =

| {
    type:"paragraph";
    content:string;
  }

| {
    type:"quote";
    content:string;
  }

| {
    type:"recovery";
  }

| {
    type:"section";
  };


export interface ReaderChapter {

id:string;

title:string;

blocks:ReaderBlock[];

}


export interface ReaderManuscript {

id?:string;

title:string;

volume:string;

chapters:ReaderChapter[];

}
