defmodule Plus2048.Repo.Migrations.CreateMessages do
  use Ecto.Migration

  def change do
    create table(:messages) do
      add :user, :string
      add :body, :string

      timestamps()
    end

  end
end
