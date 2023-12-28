engine = create_engine(f'postgresql://{username}:{password}@{host}/{db_name}')

SessionLocale = sessionmaker(autocomit=False, autoflush=False, bind=engine)

Base = declarative_base()