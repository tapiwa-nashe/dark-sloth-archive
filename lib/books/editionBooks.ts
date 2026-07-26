import {
  getEditionRegistry
} from "@/lib/publishing/registry";


export type ArchiveBook = {

  id: string;

  title: string;

  status: string;

  engine: string;

  records: any[];

  outputs: string[];

};



export function getArchiveBooks(): ArchiveBook[] {

  return getEditionRegistry()
    .map(
      edition => ({

        id:
          edition.title
            .toLowerCase()
            .replace(
              /[^a-z0-9]+/g,
              "-"
            )
            .replace(
              /^-|-$/g,
              ""
            ),


        title:
          edition.title,


        status:
          edition.status,


        engine:
          edition.engine,


        records:
          edition.records,


        outputs:
          edition.outputs

      })
    );

}
