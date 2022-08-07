import { useEffect, useRef, useState } from "react"
import { v4 } from "uuid"

export const useGetDataUrl = () => {
   return {
      getUrlImage: (setPreview: Function, file: File) => {
         if (!file) {
            return
         }
         if (file.size > 1024 *1024* 5) {
            return
         }
         const ext = file.name.split(".").pop()
         if (ext != "jpg" && ext != "png" && ext != "svg" && ext != "jpeg") {
            return
         }
         const reader = new FileReader()
         reader.onload = () => {
            setPreview((preview: Array<ArrayBuffer>) => [...preview, { id: v4(), file, baseCode: reader.result }])
         }
         reader.readAsDataURL(file)
      }
   }
}

// * Чтобы использовать, достаточно привязать к input свойство bind с помощью деструктуризации
// * Load привязывается к кнопке, если input не подходит
export const usePhotosReader = (limit: number = 6) => {

   const [previews, setPreviews] = useState<Array<{ id: any, file: File, baseCode: ArrayBuffer }>>([]);
   const inputRef = useRef<HTMLInputElement | any>(null)
   const { getUrlImage } = useGetDataUrl()


   return {
      bind: {
         ref: inputRef,
         onChange: (event: any) => {
            event.preventDefault();
            [...inputRef.current?.files].forEach((file: File, i) => {
               if (i + previews.length < limit) {
                  getUrlImage(setPreviews, file)
               }
            })
         }
      },
      check: () => {
         [...inputRef.current?.files].forEach((file: File, i) => {
            if (i + previews.length < limit) {
               getUrlImage(setPreviews, file)
            }
         })
      },
      load: (e: any) => {
         inputRef.current?.click();
      },
      delete: (id: any) => {
         setPreviews(previews => previews.filter(preview => preview.id !== id))
      },
      previews,
      clear: () => setPreviews([])

   }
}