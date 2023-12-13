docker build --no-cache -f SQL\Dockerfile.PostgreSql -t krosipovaitog/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t krosipovaitog/app ../..
