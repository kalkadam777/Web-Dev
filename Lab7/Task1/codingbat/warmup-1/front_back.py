def front_back(s):
  if len(s) > 1:
        return s[-1] + s[1:-1] + s[0]
  else:
        return s