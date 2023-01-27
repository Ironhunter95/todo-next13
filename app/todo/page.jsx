import Card from "@/components/Card";
import prisma from "@/lib/prisma";

async function getTodoList() {
  const data = await prisma.todo.findMany({
    select: {
      id: true,
      todo: true,
      date: true,
    },
  });
  return data;
}

export default async function TodoLists() {
  const todoList = await getTodoList();
  return (
    <div className="p-4 text-slate-100 space-y-4">
      <h1 className="text-xl">Todo Lists</h1>
      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card todoList={todoList} />
      </div>
    </div>
  );
}
