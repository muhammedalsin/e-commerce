import AddArticleForm from "./AddArticleForm";

const AdminPage = () => {
  return (
    <div className="fix-height flex items-center justify-center px-5 lg:px-20">
      <div className="shadow p-4 bg-blue-200 rounded w-full">
        <h2 className="text-xl lg:text-2xl text-gray-700 font-semibold mb-4">
          Yeni Ürün Ekle 
        </h2>
        <AddArticleForm />
      </div>
    </div>
  )
}

export default AdminPage;