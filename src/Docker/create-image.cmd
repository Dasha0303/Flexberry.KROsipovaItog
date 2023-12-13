docker build --no-cache -f SQL\Dockerfile.PostgreSql -t krosipovaitog1/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t krosipovaitog1/app ../..
