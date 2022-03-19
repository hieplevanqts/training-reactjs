import React from 'react'

const ListProduct = () => {
     return (
          <>
               <div className="col-md-12">
               <div className="card">
               <div className="card-header">
                    <h3 className="card-title">Danh sách sản phẩm</h3>
               </div>
               {/* /.card-header */}
               <div className="card-body">
                    <table className="table table-bordered">
                         <thead>                  
                              <tr>
                                   <th style={{width: 10}}>#</th>
                                   <th>Hình ảnh</th>
                                   <th>Tên sản phẩm</th>
                                   <th>Danh mục</th>
                                   <th>Trạng thái</th>
                                   <th style={{width: 200}}>Action</th>
                              </tr>
                         </thead>
                         <tbody>
                        
                         <tr>
                              <td>1</td>
                              <td><img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSJYDvxM_0_lXtAw__EyNjlSTTbNZJcB6rZbJpL726lue_7AP5OVWg&usqp=CAc" width={40} height={40}></img></td>
                              <td>Điện thoại iPhone 13 pro max 128GB</td>
                              <td>
                                   Sản phẩm cao cấp
                              </td>
                              <td>
                                   <div className="form-group">
                                        <div className="custom-control custom-switch">
                                             <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                                             <label className="custom-control-label" htmlFor="customSwitch1"></label>
                                        </div>
                                   </div>

                              </td>
                              <td>
                                   <a href='#' className='btn btn-default btn-sm mr-2'>Xem</a>
                                   <a href='#' className='btn btn-info btn-sm mr-2'>Sửa</a>
                                   <a href='#' className='btn btn-danger btn-sm'>Xóa</a>
                              </td>
                         </tr>
                         <tr>
                              <td>2</td>
                              <td><img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSJYDvxM_0_lXtAw__EyNjlSTTbNZJcB6rZbJpL726lue_7AP5OVWg&usqp=CAc" width={40} height={40}></img></td>
                              <td>Điện thoại iPhone 13 pro max 128GB</td>
                              <td>
                                   Sản phẩm cao cấp
                              </td>
                              <td>
                                   <div className="form-group">
                                        <div className="custom-control custom-switch">
                                             <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                                             <label className="custom-control-label" htmlFor="customSwitch1"></label>
                                        </div>
                                   </div>

                              </td>
                              <td>
                                   <a href='#' className='btn btn-default btn-sm mr-2'>Xem</a>
                                   <a href='#' className='btn btn-info btn-sm mr-2'>Sửa</a>
                                   <a href='#' className='btn btn-danger btn-sm'>Xóa</a>
                              </td>
                         </tr>
                         <tr>
                              <td>3</td>
                              <td><img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSJYDvxM_0_lXtAw__EyNjlSTTbNZJcB6rZbJpL726lue_7AP5OVWg&usqp=CAc" width={40} height={40}></img></td>
                              <td>Điện thoại iPhone 13 pro max 128GB</td>
                              <td>
                                   Sản phẩm cao cấp
                              </td>
                              <td>
                                   <div className="form-group">
                                        <div className="custom-control custom-switch">
                                             <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                                             <label className="custom-control-label" htmlFor="customSwitch1"></label>
                                        </div>
                                   </div>

                              </td>
                              <td>
                                   <a href='#' className='btn btn-default btn-sm mr-2'>Xem</a>
                                   <a href='#' className='btn btn-info btn-sm mr-2'>Sửa</a>
                                   <a href='#' className='btn btn-danger btn-sm'>Xóa</a>
                              </td>
                         </tr>
                         <tr>
                              <td>4</td>
                              <td><img src="https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcSJYDvxM_0_lXtAw__EyNjlSTTbNZJcB6rZbJpL726lue_7AP5OVWg&usqp=CAc" width={40} height={40}></img></td>
                              <td>Điện thoại iPhone 13 pro max 128GB</td>
                              <td>
                                   Sản phẩm cao cấp
                              </td>
                              <td>
                                   <div className="form-group">
                                        <div className="custom-control custom-switch">
                                             <input type="checkbox" className="custom-control-input" id="customSwitch1" />
                                             <label className="custom-control-label" htmlFor="customSwitch1"></label>
                                        </div>
                                   </div>

                              </td>
                              <td>
                                   <a href='#' className='btn btn-default btn-sm mr-2'>Xem</a>
                                   <a href='#' className='btn btn-info btn-sm mr-2'>Sửa</a>
                                   <a href='#' className='btn btn-danger btn-sm'>Xóa</a>
                              </td>
                         </tr>
                    </tbody>
                    </table>
               </div>
               {/* /.card-body */}
               <div className="card-footer clearfix">
                    <ul className="pagination pagination-sm m-0 float-right">
                    <li className="page-item"><a className="page-link" href="#">«</a></li>
                    <li className="page-item"><a className="page-link" href="#">1</a></li>
                    <li className="page-item"><a className="page-link" href="#">2</a></li>
                    <li className="page-item"><a className="page-link" href="#">3</a></li>
                    <li className="page-item"><a className="page-link" href="#">»</a></li>
                    </ul>
               </div>
               </div>
               
               </div>

          </>
     )
}

export default ListProduct
