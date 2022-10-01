import React, {useCallback, useState} from "react";
import Breadcrumb from "./../layouts/Breadcrumb";
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import "./AddProduct.css";
import "react-checkbox-tree/lib/react-checkbox-tree.css";
import CheckboxTree from "react-checkbox-tree";
import { useDropzone } from "react-dropzone";
import $ from 'jquery';



const AddProduct = () => {
  const [checked, setChecked] = React.useState([]);
  const [expanded, setExpanded] = React.useState([]);
  const [html, setHtml] = useState([]);
  var arr = [];

  var data = new FormData;

   
  const deleteMultiImg = (element, key) => {
    alert(key);
    data.forEach(item=>{
      data.delete('multiImg_'+key);

    })
    $(element.target).parent().hide();
    console.log(element);
  }

const onDrop = useCallback((acceptedFiles) => {
  // Do something with the files

 

  acceptedFiles.forEach((element, key) => {
    data.append('multiImg_'+key, element);
    const reader = new FileReader();
        reader.addEventListener("load", function () {
            var src = reader.result;
            // console.log(src);
            // var arr = html.push(src)
            arr = [...arr, {src : src, key : key}]
            setHtml(arr);
        }, false);

        if (element) {
            reader.readAsDataURL(element);
        }

  });
}, []);

const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const nodes = [
    {
      value: "mars",
      label: "Sản phẩm",
      children: [
        { value: "phobos", label: "Sản phẩm loại 1" },
        { value: "deimos", label: "Sản phẩm loại 2" },
      ],
    },
    {
      value: "mars2",
      label: "Sản phẩm 2",
      children: [
        { value: "phobos2", label: "Sản phẩm 2 loại 1" },
        { value: "deimos2", label: "Sản phẩm 2 loại 2" },
      ],
    },
  ];
  return (
    <>
      <Breadcrumb title={`Thêm sản phẩm`} />
      <section className="content">
        <div className="container-fluid">
          {/* SELECT2 EXAMPLE */}
          <div className="card card-default">
            {/* /.card-header */}
            <div className="card-body">
              <div className="row">
                <div className="col-md-9">
                  <div className="form-group">
                    <label>Tên sản phẩm</label>
                    <input className="form-control" />
                  </div>
                  {/* /.form-group */}
                  <div className="form-group">
                    <label>Đường dẫn slug</label>
                    <input className="form-control" />
                  </div>

                  {/* <div className="form-group">
                <label>Upload multiple image</label>
                <br/>
                <input className="" type="file" multiple/>
              </div> */}

                  <div {...getRootProps()} id="presentation">
                    <input {...getInputProps()} />
                    {isDragActive ? (
                      <p>Drop the files here ...</p>
                    ) : (
                      <p>
                        Drag 'n' drop some files here, or click to select files
                      </p>
                    )}
                  </div>

                  <div class="form-group" id="img_multi">
                    {html.map((item, index) => {
                      if(index < html.length - 1){
                        return (
                          <div className="img-item" key={index}>
                          <img
                            src={item?.src}
                            alt
                            className="img-thumbnail m-1"
                            style={{ width: 100, height: 100 }}
                          />
                          <i
                            className="fa fa-times"
                            aria-hidden="true"
                            onClick={(e)=>deleteMultiImg(e, item?.key)}
                          />
                        </div>
                             
                        )
                      }
                       
                    })}
                  </div>

                  {/* /.form-group */}

                  <div className="form-group">
                    <label>Mô tả</label>
                    <CKEditor
                      editor={ClassicEditor}
                      data=""
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        console.log("Editor is ready to use!", editor);
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                      }}
                      onBlur={(event, editor) => {
                        console.log("Blur.", editor);
                      }}
                      onFocus={(event, editor) => {
                        console.log("Focus.", editor);
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label>Nội dung</label>
                    <CKEditor
                      editor={ClassicEditor}
                      data=""
                      onReady={(editor) => {
                        // You can store the "editor" and use when it is needed.
                        console.log("Editor is ready to use!", editor);
                      }}
                      onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({ event, editor, data });
                      }}
                      onBlur={(event, editor) => {
                        console.log("Blur.", editor);
                      }}
                      onFocus={(event, editor) => {
                        console.log("Focus.", editor);
                      }}
                    />
                  </div>

                  <div className="form-group">
                    <label>Titel SEO</label>
                    <input className="form-control" />
                  </div>

                  <div className="form-group">
                    <label>Descriptiom SEO</label>
                    <textarea className="form-control" rows={5}></textarea>
                  </div>
                  <div className="text-right">
                    <button type="submit" class="btn btn-primary">
                      Submit
                    </button>
                  </div>
                </div>
                {/* /.col */}
                <div className="col-md-3">
                  <div className="form-group">
                    <label>Avatar</label>
                    <input type="file" />
                    <img src="/noimage.png" class="img-thumbnail mt-3"></img>
                  </div>

                  <div className="form-group">
                    <label>Danh mục</label>
                    <CheckboxTree
                      nodes={nodes}
                      checked={checked}
                      expanded={expanded}
                      onCheck={(checked) => setChecked(checked)}
                      onExpand={(expanded) => setExpanded(expanded)}
                      iconsClass="fa5"
                    />
                  </div>

                  {/* /.form-group */}
                  <div className="form-group">
                    <label>Trạng thái</label>
                    <div className="form-check">
                      <input
                        type="checkbox"
                        class="form-check-input"
                        id="exampleCheck1"
                      />
                      <label class="form-check-label" for="exampleCheck1">
                        Kích hoạt
                      </label>
                    </div>
                  </div>

                  {/* /.form-group */}
                </div>
                {/* /.col */}
              </div>
            </div>
          </div>
          {/* /.card */}
        </div>
      </section>
    </>
  );
};

export default AddProduct;
